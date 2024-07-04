/** @type {import('next').NextConfig} */
// 여기에 필요한 환경 설정을 해야 한다.
// 외부 이미지들을 가져올때 사용
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yts.mx'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
