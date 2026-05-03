import Image from "next/image";

type WebsUpLogoProps = {
  className?: string;
};

export function WebsUpLogo({ className = "" }: WebsUpLogoProps) {
  return (
    <Image
      src="/images/websup-logo.png"
      alt="WebsUp"
      width={241}
      height={82}
      className={className}
    />
  );
}
