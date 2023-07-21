import { Song } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies} from "next/headers"
import songfetcher from "./songfetcher"

const titlefetcher = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
  cookies: cookies
  })

if(!title){
  const allSongs = await songfetcher()
  return allSongs;
}

const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
}

export default titlefetcher
