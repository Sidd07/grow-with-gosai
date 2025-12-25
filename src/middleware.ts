import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/management/login",
    },
})

export const config = {
    matcher: ["/management/:path*"]
}
