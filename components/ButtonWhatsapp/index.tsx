"use client";

import React, { Suspense } from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export function ButtonWhatsapp() {
  return (
    <Suspense fallback={<p>.</p>}>
      <FloatingWhatsApp
        phoneNumber="85987520858"
        accountName="Online"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </Suspense>
  );
}
