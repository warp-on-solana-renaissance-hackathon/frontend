import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Badge} from "@/components/ui/badge";

import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {getCurrDateTime} from "@/lib/utils";

export const BridgeNftForm = () => {
  const [obj, setObj] = useState({
    bridgeMode: 'NFT',
    srcChain: '',
    dstChain: '',
    srcMakerAddress: '',
    destTakerAddress: '',
    fileContent: 0,
  });

  const [srcChain, setSrcChain] = useState<string>('');
  const [dstChain, setDstChain] = useState<string>('');
  const [srcMakerAddress, setSrcMakerAddress] = useState<string>('');
  const [destTakerAddress, setDestTakerAddress] = useState<string>('');
  const [fileContent, setFileContent] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Access the file
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    // Create a new FileReader instance
    const reader = new FileReader();

    // Set up the FileReader to update the state when it has read the file
    reader.onload = (e) => {
      // The result attribute contains the file's data as a binary string
      const binaryStr = e.target?.result;
      setFileContent(binaryStr as string | ArrayBuffer | null);
    };

    // Read the file as a binary string
    reader.readAsBinaryString(file);
  };

  const confirmTokenTransaction = () => {
    const obj = {
      bridgeMode: 'NFT',
      srcChain: srcChain,
      dstChain: dstChain,
      srcMakerAddress: srcMakerAddress,
      destTakerAddress: destTakerAddress,
      destTokenAddress: fileContent,
    }

    console.log(obj);
  }

  return (
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
    <Input id="picture" type="file"
            onChange={handleFileChange}
    />

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
        <Button
          onClick={() => {
            toast("Transaction successfully completed at " + getCurrDateTime());
          }}
          variant="outline">Confirm transaction</Button>
    <ToastContainer />
  </CardFooter>
</Card>
  )
}
