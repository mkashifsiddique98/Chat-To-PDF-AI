"use client"
import useUpload from '@/hooks/useUpload'
import { CircleArrowDown, RocketIcon } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUploader = () => {
  const { progress, status, fileId, handleUpload } = useUpload();
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Todo: Do something with the files
    console.log(acceptedFiles)
    const file = acceptedFiles[0];
    if (file) {
      await handleUpload(file)
    } else {

    }

  }, [])
  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"]
    }
  })

  const uploadInProgress = progress != null && progress >=0 && progress <=100;

  return (
    <div className="flex flex-cols items-center mx-auto max-w-7xl  ">
       {uploadInProgress && (
        <div className='mt-32 flex flex-col justify-center items-center gap-5'>
            <div
            className={`radial-progress bg-indigo-300 text-white border-indigo-600 border-4 ${progress === 100 && "hidden"}`}
            role='progressbar'
            style={{
              // @ts-ignore
              "--value":progress,
              "--size":"12rem",
              "--thickness":"1.3rem"
            }}
            >
               {progress} %
            </div>
            <p>{status?.toString()}</p>
        </div>
       )}
      <div {...getRootProps()} className={`p-10 border-2 border-dashed border-indigo-600 text-indigo-600 w-[90%] rounded-lg h-96 flex items-center text-center justify-center ${isFocused || isDragAccept ? `bg-indigo-300` : `bg-indigo-100`}`}>
        <input {...getInputProps()} />
        <div className='flex flex-col justify-center items-center'>
          {isDragActive ?
            <>
              <RocketIcon className='h-20 w-20 animate-ping' />
              <p>Drop the files here ...</p>
            </>
            :
            <>
              <CircleArrowDown className='h-20 w-20 animate-bounce' />
              <p>Drag n drop some files here, or click to select files</p>
            </>}
        </div>
      </div>
    </div>
  )
}

export default FileUploader