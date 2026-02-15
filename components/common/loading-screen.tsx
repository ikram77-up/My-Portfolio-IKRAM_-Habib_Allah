import Image from "next/image"

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen-logo">
        <Image src="/logo.png" alt="Loading..." width={250} height={250} />
      </div>
    </div>
  )
}
