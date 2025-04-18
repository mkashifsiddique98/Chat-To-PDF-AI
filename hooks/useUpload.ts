"use  client"

import { db, storage } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
export enum StatusText {
    UPLOADING = "Uploading file...",
    UPLOADED = "File upload successfully!",
    SAVING = "Saving file to database...",
    GENERATING = "Generating AI embeding, This will only take a few seconds..."
}
export type Status = StatusText[keyof StatusText];
function useUpload() {
    const [progress, setProgress] = useState<number | null>(null)
    const [fileId, setFileId] = useState<string | null>(null)
    const [status, setSatus] = useState<Status | null>(null)
    const { user } = useUser();
    const router = useRouter();
    const handleUpload = async (file: File) => {
        if (!user?.id) {
            console.error("User ID is undefined. User might not be logged in.");
            return;
        }
        // Todo :

        const fileIdToUploadTo = uuidv4();
        const storageRef = ref(storage, `user/${user?.id}/files/${fileIdToUploadTo}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setSatus(StatusText.UPLOADING)
            setProgress(percent)
        }, (error) => {
            console.log("error uploading", error)
        }, async () => {
            setSatus(StatusText.UPLOADED)
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            setSatus(StatusText.SAVING);
            await setDoc(
                doc(db, 'user', user.id, "files", fileIdToUploadTo),
                {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    downloadUrl: downloadUrl,
                    ref: uploadTask.snapshot.ref.fullPath,
                    createdAt: new Date(),
                })
            setSatus(StatusText.GENERATING);
            // Generating AI Embededing...

            setFileId(fileIdToUploadTo);
        })

    }
    return { progress, status, fileId, handleUpload }
}


export default useUpload;