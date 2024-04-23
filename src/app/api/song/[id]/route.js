import { NextResponse } from "next/server"
import {songs} from '@/app/api/songs'

export function GET(request, {params}){
    let song
    for(let i = 0; i<songs.length; i++)
        if(songs[i].id  == params.id) song = songs[i]
    
    return !song ? (
        NextResponse.json({error: 'Song not found'},
        {status: 404})
    ) : 
    NextResponse.json(song, {status: 200})

}

export function POST(request){
    
    return NextResponse.json({
        messge: "Created object",
        result: request.json()
    })

}
export function PUT(){
    return NextResponse.json(songs)
}

export function DELETE(request){
    
    return NextResponse.json({
        messge: "Created object",
        result: request.json()
    })

}