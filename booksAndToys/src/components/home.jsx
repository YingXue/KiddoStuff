import { BookPage } from "./bookPage";

export function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                我是柚淇，和你分享我爱读的每一本书 📚
            </h1>
            <p className="text-lg text-gray-600">
                我有好多看过的书，还有一些我现在正在看<br/>
                如果你喜欢我已经看完的书，也可以来我家看，或者向我借哦🌟<br/>
            </p>
        </div>

      <BookPage/>
    </div>
  );
}
