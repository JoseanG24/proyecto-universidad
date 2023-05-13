import React from "react";
import Image from "next/image";
import Link from "next/link";

const Restaurante1_Admin = () => {

    return (
        <>
            <Image src="/images/Sin título-4.png" width={80}
            height={8} alt="gitane"></Image>
            <Link href="#"><h2>Modificar Items</h2></Link>
            <Link href="#"><h2>Control de pedidos</h2></Link>
        </>
    )
}

export default Restaurante1_Admin;
