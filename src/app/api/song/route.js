import { NextResponse } from "next/server";
import  {songs} from '../songs'

export function GET(){
    return NextResponse.json(songs)
}

export function POST(request){
    
    return NextResponse.json({
        messge: "Created object",
        result: request.json()
    })

}