import { NextRequest, NextResponse } from "next/server";
import subCourses from "@/modals/SubCourse";
export async function POST (req: NextRequest){
    const {id} = await req.json();
    const course = await subCourses.findOne({_id: id});
    if(!course){
        return NextResponse.json({course: false})
    }else{
        return NextResponse.json({course})
    }
}