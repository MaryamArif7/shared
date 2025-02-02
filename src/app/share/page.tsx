import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Shared Task",
    description: "This is a shared page for the purpose of the task.",
    openGraph: {
      title: "Shared Page",
      description: "This is a shared page for the purpose of the task.",
      url: "https://shared-task.vercel.app/share",
      images: [
        {
          url: "https://media.licdn.com/dms/image/v2/D4E0BAQHS-3AIdEPh4w/company-logo_200_200/company-logo_200_200/0/1710112143160/rabbitoio_logo?e=1746662400&v=beta&t=GV2yMPGyLqNgE4A-p9BD6CQ4-Tw0maXGjTX08Nj3fWk",
          width: 1200,
          height: 630,
          alt: "rabbito",
        },
      ],
      siteName: "Rabbito",
    },
  };
}

export default function ShareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
