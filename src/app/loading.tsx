export default function Loading() {
  return (
    <div className='dark:bg-dark-main dark:text-dark-sky flex items-center gap-4 justify-center w-full h-dvh bg-white text-7xl font-black text-light-500'>
      <span className='animate-[loading_1s_linear_infinite]'>.</span>
      <span className='animate-[loading_1s_linear_infinite] [animation-delay:200ms]'>
        .
      </span>
      <span className='animate-[loading_1s_linear_infinite] [animation-delay:400ms]'>
        .
      </span>
    </div>
  );
}
