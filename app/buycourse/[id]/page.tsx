"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
export default function Home({ params }: { params: { id: String } }){
    const [course, setCourse]: any = React.useState(false);
    const cId = params.id;
    const [price, setPrice]: any  = React.useState(0);
    React.useEffect(()=>{
        (async () => {
            const req = await fetch('/api/buyDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: cId}),
            });
            const data = await req.json();
            if(data.course) {
                setCourse(data.course);
                setPrice(parseInt(data.course.price));
            }
            console.log(data);
        })()
    },[]);
    return (
        <>
        {!course ? (<>
        Geting the Course Data
        </>): (<>
            Name is {course.name}
            Price is {course.price}
        </>)}
        </>
    )
}