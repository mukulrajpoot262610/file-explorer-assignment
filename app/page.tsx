import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-[90vh] text-vscode-text flex justify-center items-center flex-col'>
      <Image src='/logo.svg' height={300} width={300} alt='Logo' />
      <div className='mt-6 text-center text-sm flex flex-col gap-3'>
        <p className='tracking-wider'>Show All Commands</p>
        <p className='tracking-wider'>Go to File</p>
        <p className='tracking-wider'>Find in Files</p>
        <p className='tracking-wider'>Toggle Full Screen</p>
        <p className='tracking-wider'>Show Settings</p>
      </div>
    </div>
  );
}
