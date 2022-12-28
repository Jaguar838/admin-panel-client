import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import css from "./UserAvatar.module.scss";

const UserAvatar: FC<{avatarPath:string, link:string, title?: string }> = ({avatarPath,link, title}) => {
    return (<Link href={link}>
        <a title={title}>
            <Image className={css.avatar}  src={avatarPath} width={45} height={45} alt=''/>
            
</a>
        </Link>)
}

export default UserAvatar