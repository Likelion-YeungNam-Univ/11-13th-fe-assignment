export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-brpx-6">
      <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg mb-6">
        404
      </h1>
      <p className="text-2xl font-semibold text-blue-800 mb-4">
        페이지를 찾을 수 없습니다.
      </p>
      <p className="text-blue-700 mb-8 max-w-md text-center">
        아쉽지만, 요청하신 페이지가 존재하지 않아요. URL을 다시 확인하거나 메인
        페이지로 돌아가 보세요!
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
}
