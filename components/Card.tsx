import React from 'react';

export default function Card() {
  return (
    <div className='flex h-4/6 w-full flex-col items-center justify-around rounded-3xl bg-[var(--card-primary)] md:h-3/4 md:w-2/3'>
      <div className='shrink-1 grow-1 mt-24 flex w-full flex-col items-center justify-between'>
        <span className='mb-6 text-xl font-medium md:text-5xl'>
          Verifique seu endereço de email
        </span>
        <span className='flex justify-center text-center text-xs md:text-sm'>
          Um código de quatro dígitos foi enviado para seu email
          teste@gmail.com.
        </span>
        <span className='flex justify-center text-center text-xs md:text-sm'>
          Por favor, dígite o código abaixo para verificar seu email.
        </span>
      </div>
      <div className='shrink-1 grow-1 flex space-x-2 md:space-x-4'>
        <input
          className='shrink-1 grow-1 flex h-[6rem] w-[4rem] items-center justify-center rounded-md border-[#2e3650] bg-[var(--bg-primary)] text-center text-6xl placeholder-[#2e3650] caret-transparent hover:border-2 md:h-[12rem] md:w-[10rem] md:text-8xl'
          type='text'
          maxLength={1}
          placeholder='0'
        />
        <input
          className='shrink-1 grow-1 flex h-[6rem] w-[4rem] items-center justify-center rounded-md border-[#2e3650] bg-[var(--bg-primary)] text-center text-6xl placeholder-[#2e3650] caret-transparent hover:border-2 md:h-[12rem] md:w-[10rem] md:text-8xl'
          type='text'
          maxLength={1}
          placeholder='0'
        />
        <input
          className='shrink-1 grow-1 flex h-[6rem] w-[4rem] items-center justify-center rounded-md border-[#2e3650] bg-[var(--bg-primary)] text-center text-6xl placeholder-[#2e3650] caret-transparent hover:border-2 md:h-[12rem] md:w-[10rem] md:text-8xl'
          type='text'
          maxLength={1}
          placeholder='0'
        />
        <input
          className='shrink-1 grow-1 flex h-[6rem] w-[4rem] items-center justify-center rounded-md border-[#2e3650] bg-[var(--bg-primary)] text-center text-6xl placeholder-[#2e3650] caret-transparent hover:border-2 md:h-[12rem] md:w-[10rem] md:text-8xl'
          type='text'
          maxLength={1}
          placeholder='0'
        />
      </div>
      <div>
        <a
          href='#'
          className='rounded-md border-b-[#2e3650] bg-[var(--bg-primary)] px-24 py-4 text-lg font-semibold hover:border-b-4 md:px-56'
        >
          Verificar OTP
        </a>
      </div>
    </div>
  );
}
