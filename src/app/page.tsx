"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const testAi = useMutation(trpc.createWorkflow.mutationOptions());
  return <div className="">Protected Server component</div>;
};

export default Page;
