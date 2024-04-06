
'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  
import { WavyBackground } from '@/components/ui/wavy-background';

const page = () => {


    const [srcChain, setSrcChain] = useState<string>('')
    const [dstChain, setDstChain] = useState<string>('')
    const [bridgeMode, setBridgeMode] = useState<string>('Token')
    const handleModeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBridgeMode(e.target.value);
  };

    // Function to handle bridge mode change
    const handleBridgeModeChange = (event: React.FormEvent<HTMLSelectElement>) => {
        'Token' === event.currentTarget.value ? setBridgeMode('Token') : setBridgeMode('NFT');
    }

    return (
        <>
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                
                <Card className='p-4 mb-12'>
                <form>
        <Label htmlFor="mode">Mode</Label> {/* Make sure you have text or some content inside your Label */}
        <Select value={bridgeMode} onChange={handleModeChange}> 
          <SelectTrigger id='mode'>
            <SelectValue placeholder="What are we bridging?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="token">Token</SelectItem>
            <SelectItem value="nft">NFT</SelectItem>
          </SelectContent>
        </Select>
      </form>
                </Card>
                 

                <Card className='min-w-96'>
                    <CardHeader className='mb-4'>
                        <CardTitle>
                            Bridging Tokens
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <CardDescription>Select your source chain:</CardDescription>
                        <Select>
                            <SelectTrigger id="chain">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="solana">Solana&nbsp;(devnet)</SelectItem>
                            <SelectItem value="ethereum">Ethereum&nbsp;(sepolia testnet)</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                    <CardContent className='flex flex-row gap-x-2'>
                        <div className="w-1/3">
                            <Select>
                                <SelectTrigger id="token">
                                <SelectValue placeholder="Token" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                <SelectItem value="solana">Solana</SelectItem>
                                <SelectItem value="ethereum">Ethereum</SelectItem>
                                <SelectItem value="usdc">USDC</SelectItem>
                                <SelectItem value="usdt">USDT</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-2/3 flex items-center">
                            <Input type="number" placeholder="Amount" className='mr-3'/>
                            <p>SOL</p>
                        </div>
                    </CardContent>
                    <CardContent className='flex items-center justify-center'><Badge variant="default">WARP TO</Badge></CardContent>
                    <CardContent>
                    <CardDescription>Select your destination chain:</CardDescription>
                    <Select>
                            <SelectTrigger id="chain">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="solana">Solana&nbsp;(devnet)</SelectItem>
                            <SelectItem value="ethereum">Ethereum&nbsp;(sepolia testnet)</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>

                    

                    <CardContent className='flex flex-row gap-x-2'>
                        <div className="w-1/3">
                            <Select>
                                <SelectTrigger id="token">
                                <SelectValue placeholder="Token" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                <SelectItem value="solana">Solana</SelectItem>
                                <SelectItem value="ethereum">Ethereum</SelectItem>
                                <SelectItem value="usdc">USDC</SelectItem>
                                <SelectItem value="usdt">USDT</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-2/3 flex items-center">
                            <Input type="number" placeholder="Amount" className='mr-3'/>
                            <p>USDC</p>
                        </div>
                    </CardContent>

                    <CardFooter className='flex justify-center mt-5'>
                        <Button variant="outline">
                            Confirm transaction
                        </Button>
                    </CardFooter>
                </Card>

                <Card className='min-w-96'>
                    <CardHeader className='mb-4'>
                        <CardTitle>
                            Bridging NFTs
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-2'>
                    <CardDescription>Select your source chain:</CardDescription>
                        <Select>
                            <SelectTrigger id="chain">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="solana">Solana&nbsp;(devnet)</SelectItem>
                            <SelectItem value="ethereum">Ethereum&nbsp;(sepolia testnet)</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>

                    <CardContent className='flex flex-col justify-center gap-2'>

                    <Label htmlFor="picture">Upload Your NFT</Label>
                    <Input id="picture" type="file" />

                    </CardContent>

                    <CardContent className='flex items-center justify-center'><Badge variant="default">WARP TO</Badge></CardContent>
                    <CardContent className='flex flex-col gap-2'>
                    <CardDescription>Select your destination chain:</CardDescription>
                    <Select>
                            <SelectTrigger id="chain">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="solana">Solana&nbsp;(devnet)</SelectItem>
                            <SelectItem value="ethereum">Ethereum&nbsp;(sepolia testnet)</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>


                    <CardFooter className='flex justify-center mt-5'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Confirm transaction</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            </DialogHeader>
                                
                            <DialogDescription>
                                You are about to bridge your NFT from {srcChain} to {dstChain}. This action is irreversible.
                            </DialogDescription>
                            <DialogFooter>
                            <Button type="submit">Confirm</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    </CardFooter>
                </Card>
            </WavyBackground>
        </>
        
    )
}

export default page