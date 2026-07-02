"use client";

import { useSearchParams } from "next/navigation";
import { BaseBuilder } from "@/components/editor/BaseBuilder";

export function BaseBuilderSearchClient() {
  const searchParams = useSearchParams();
  return <BaseBuilder initialSearch={searchParams.toString()} />;
}
