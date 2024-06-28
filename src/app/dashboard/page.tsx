import React from 'react';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
    const {} = getKindeServerSession();

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Page;