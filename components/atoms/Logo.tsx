import Image from "next/image"

interface logoProps {
  source: "logo-dark" | "logo-light",
  alt: string
}

export default function Logo(props: logoProps) {
  const { source, alt } = props;
  return (
    <Image
      src={`/images/${source}.svg`}
      alt={alt}
      width={95}
      height={24}
      priority
    />
  )
}