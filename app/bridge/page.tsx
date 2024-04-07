
'use client'
import React from 'react'

import { WavyBackground } from '@/components/ui/wavy-background';
import {BridgeForm} from "@/app/bridge/snippets/bridge-form";

const page = () => {

    return (
        <>
            <WavyBackground className="max-w-4xl mx-auto pb-40">
              <BridgeForm />
            </WavyBackground>
        </>

    )
}

export default page
