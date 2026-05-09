import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session =  await auth.api.getSession({
        headers: new Headers({
            'x-api-key': apiKey,
        }),
    });
    if(!session){
        return NextResponse.redirect(new URL('/signin', request.url))

  }
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['profile','/allbooks/:path'],
}