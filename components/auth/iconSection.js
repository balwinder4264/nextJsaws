import Image from 'next/image'
import logoPNG from "../../assets/logos/micc.svg"
const IconSection = () => {
    return <div className="flex justify-center items-center flex-wrap">
        <div className="flex  ">
            <Image
                src={logoPNG}
                alt="Picture of the author"
                width={206}
                height={86}
            />

        </div>
    </div>
}

export default IconSection;