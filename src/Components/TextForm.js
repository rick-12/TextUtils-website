import React, { useState } from 'react'

export default function TextForm() {

  const [text, setText] = useState('');

  const handleUppercase = () => {
    const s1 = text.toUpperCase();
    setText(s1);
  }

  const handleLowercase = () => {
    const s1 = text.toLowerCase();
    setText(s1);
  }

  const handleClear = () => {
    const s1 = "";
    setText(s1);
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleCapitalize = () => {
    let s1 = "";
    let newText = text + " ";
    for (let index = 0; index < newText.length;) {
      let i = newText.indexOf(' ', index);
      let word = newText.substring(index, i);
      index = i + 1;
      if (word === "") {
        continue;
      }
      s1 += capitalizeFirstLetter(word) + " ";
    }
    const s2 = s1.trim();
    setText(s2);
  }

  const handleCopyText = () => {
    let copiedText = document.getElementById('myTextUtils');
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
  }

  const onChangeHandler = e => {
    setText(e.target.value);
  }

  return (
    <>
      <div className='p-6 bg-purple-200 dark:bg-purple-900 dark:text-white'>
        <div className='flex justify-center'>
          <div className='space-y-3'>
            <div className='flex justify-center'>
              <h1 className='text-3xl font-serif'>Enter your text below:</h1>
            </div>
            <form>
              <textarea name="TextUtils" id="myTextUtils" cols="120" rows="16" value={text} className='p-1 border-2 border-black dark:bg-gray-600' onChange={onChangeHandler}></textarea>
            </form>
            <div className='space-x-3 flex justify-center'>
              <button className='bg-purple-500 p-2 rounded-md hover:bg-purple-400 shadow hover:shadow-md dark:bg-purple-200 dark:text-black' onClick={handleUppercase}>Change to Uppercase</button>
              <button className='bg-purple-500 p-2 rounded-md hover:bg-purple-400 shadow hover:shadow-md dark:bg-purple-200 dark:text-black' onClick={handleLowercase}>Change to Lowercase</button>
              <button className='bg-purple-500 p-2 rounded-md hover:bg-purple-400 shadow hover:shadow-md dark:bg-purple-200 dark:text-black' onClick={handleCapitalize}>Capitalize</button>
              <button className='bg-purple-500 p-2 rounded-md hover:bg-purple-400 shadow hover:shadow-md dark:bg-purple-200 dark:text-black' onClick={handleCopyText}>Copy Text</button>
              <button className='bg-purple-500 p-2 rounded-md hover:bg-purple-400 shadow hover:shadow-md dark:bg-purple-200 dark:text-black' onClick={handleClear}>Clear</button>
            </div>
          </div>
        </div>
        <div className="summary h-600 flex justify-center mt-6">
          <div className='space-y-1'>
            <h1 className='text-xl font-serif'>Your Text Summary:</h1>
            <div className="bg-blue-300 border-2 border-black h-500 w-90">
              <p className='p-2 dark:text-black'>{text === '' ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}