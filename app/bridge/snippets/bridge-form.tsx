import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Card,
} from "@/components/ui/card"
import {BridgeTokenForm} from "@/app/bridge/snippets/bridge-token-form";
import {BridgeNftForm} from "@/app/bridge/snippets/bridge-nft-form";

export const BridgeForm = () => {
  const [bridgeMode, setBridgeMode] = useState<string>('Token')

  // Function to handle bridge mode change
  const handleBridgeModeChange = () => {
    bridgeMode === 'NFT' ? setBridgeMode('Token') : setBridgeMode('NFT');
  }

  return (
    <>
      <Card className='p-4 mb-12'>
        <form>
          <Label htmlFor="mode"/>
          <Select value={bridgeMode} onValueChange={handleBridgeModeChange}>
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

      {bridgeMode=== 'Token' && (
        <BridgeTokenForm />
      )}
      {bridgeMode=== 'NFT' && (
        <BridgeNftForm />
      )}
    </>
  )
}
