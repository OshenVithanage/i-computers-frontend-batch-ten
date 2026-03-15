import { createClient } from "@supabase/supabase-js"

let url = "https://iwupqdyyrwytyqpfjzhx.supabase.co"
let key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dXBxZHl5cnd5dHlxcGZqemh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0ODUyMDgsImV4cCI6MjA4OTA2MTIwOH0.nICoVsiQR_0rqVvndA3jVxSIP1OwxFJabzYmUl1xL6o"
const supabase = createClient(url, key);

export default function uploadMedia(file, ){
    return new Promise(
        (resolve, reject) => {
            if(file == null){
                reject("No File Selected");
            }else{
                const timeStamp = new Date().getTime();
                const fileName = timeStamp + " " + file.name;
                supabase.storage.from("images").upload(fileName, file, {
                    upsert: false,
                    cacheControl: "3600",
                }).then(()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                    resolve(publicUrl)
                }).catch((error)=>{
                    console.log(error)
                    reject(error);
                });
            }
        }
    )
}