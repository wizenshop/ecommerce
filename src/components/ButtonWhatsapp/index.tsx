'use client';

import React, { Suspense } from 'react';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export function ButtonWhatsapp() {
  return (
    <Suspense fallback={<p>carregarnfo</p>}>
      <FloatingWhatsApp
        phoneNumber="85987520858"
        accountName="Online"
        buttonStyle={{ bottom: '5rem' }}
        style={{ height: '3rem', width: '3rem', position: 'relative' }}
        chatMessage="Óla"
        placeholder="Digite uma mensagem.."
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </Suspense>
  );
}
