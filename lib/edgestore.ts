'use client'
import { type EdgeStoreRouter } from '../app/(EdgeStore)/api/edgestore/[...edgestore]/route'
import { createEdgeStoreProvider } from '@edgestore/react'
const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>()
export { EdgeStoreProvider, useEdgeStore }
