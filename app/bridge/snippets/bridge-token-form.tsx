import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {getCurrDateTime} from "@/lib/utils";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BridgeTokenForm = () => {
  const [obj, setObj] = useState({
    bridgeMode: 'Token',
    srcChain: '',
    dstChain: '',
    srcMakerAddress: '',
    destTakerAddress: '',
    srcTokenAddress: '',
    srcTokenAmt: '',
    destTokenAddress: '',
  });

  const [srcChain, setSrcChain] = useState<string>('');
  const [dstChain, setDstChain] = useState<string>('');
  const [srcMakerAddress, setSrcMakerAddress] = useState<string>('');
  const [destTakerAddress, setDestTakerAddress] = useState<string>('');
  const [srcTokenAddress, setSrcTokenAddress] = useState<string>('');
  const [srcTokenAmt, setSrcTokenAmt] = useState<string>('');
  const [destTokenAddress, setDestTokenAddress] = useState<string>('');

  const confirmTokenTransaction = () => {
    setObj({
      bridgeMode: 'Token',
      srcChain: srcChain,
      dstChain: dstChain,
      srcMakerAddress: srcMakerAddress,
      destTakerAddress: destTakerAddress,
      srcTokenAddress: srcTokenAddress,
      srcTokenAmt: srcTokenAmt,
      destTokenAddress: destTokenAddress,
    });

    console.log(obj);
  }

  return (
    <>
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
            <SelectContent
              position="popper">
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
          <Button
            onClick={() => {
              toast("Transaction successfully completed at " + getCurrDateTime());
            }}
            variant="outline">
            Confirm transaction
          </Button>
          <ToastContainer />
        </CardFooter>
      </Card>
    </>
  )
}
