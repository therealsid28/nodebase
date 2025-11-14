import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  return <div className="">Protected Server component</div>;
};

export default Page;
