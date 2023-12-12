import { NextResponse } from "next/server";

export async function GET(req){
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a8250c3cafb4aad9309eeeebf67d610"

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Network Response was not ok");
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; 
    }
}