'use client'
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { WavyBackground } from '@/components/ui/wavy-background';

const Page = () => {
    const [srcChain, setSrcChain] = useState<string>('');
    const [dstChain, setDstChain] = useState<string>('');
    const [bridgeMode, setBridgeMode] = useState<string>('Token');

    // Function to handle bridge mode change
    const handleBridgeModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBridgeMode(event.target.value);
    };

    return (
        <>
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                <Card className='p-4 mb-12'>
                    <form action="">
                        <Select value={bridgeMode} onChange={handleBridgeModeChange as (event: React.ChangeEvent<HTMLSelectElement>) => void}>
                            <SelectTrigger>
                                <SelectValue placeholder="What are we bridging?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Token">Token</SelectItem>
                                <SelectItem value="NFT">NFT</SelectItem>
                            </SelectContent>
                        </Select>
                    </form>
                </Card>

                {bridgeMode === 'Token' && (
                    <Card className='min-w-96'>
                        <CardHeader className='mb-4'>
                            <CardTitle>
                                Bridging Tokens
                            </CardTitle>
                        </CardHeader>
                        {/* Token Card Content */}
                    </Card>
                )}

                {bridgeMode === 'NFT' && (
                    <Card className='min-w-96'>
                        <CardHeader className='mb-4'>
                            <CardTitle>
                                Bridging NFTs
                            </CardTitle>
                        </CardHeader>
                        {/* NFT Card Content */}
                    </Card>
                )}
            </WavyBackground>
        </>
    );
};

export default Page;
