# Đồ án kết môn Computer Vison (Thị giác máy tính)

## Tổng quan

- Đồ án sử dụng mô hình kết CNN (Convolutional Neural Networks) - LSTM (Long short term memory) để tạo các tiêu đề cho ảnh. Trong đó, việc trích xuất các đặc trưng của ảnh sẽ sử dụng Xception - là một mô hình CNN được huấn luyện dựa trên bộ dữ liệu imageet và mô hình LSTM sẽ được sử dụng để tạo ra tiêu đề cho ảnh.

- Ngoài ra để tăng thêm tính sinh động cho đồ án thì đồ án còn được xây dựng kết hợp thêm module web với (Flask - Python Framework và ReactJS - thư viện javascript front-end) để tải ảnh lên và hiển thị tiêu đề của mô hình trên website.

## Các điều kiện tiên quyết

- Text editor: [VS Code](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwii6J-yn7yDAxWe0KACHZeJCJoQFnoECBAQAQ&url=https%3A%2F%2Fcode.visualstudio.com%2Fdownload&usg=AOvVaw11fc5fOXYIyxQh75jYLjXg&opi=89978449)
- [Git](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjCydKUn7yDAxVW-TgGHXH5ClAQFnoECAoQAQ&url=https%3A%2F%2Fgit-scm.com%2F&usg=AOvVaw1lFNWgbWf8FsbaoU4AOPBr&opi=89978449)
- [pnpm](https://pnpm.io/installation) (version 8.14.0)
- [python](https://www.python.org/downloads/) (version 3.11.3)

## Các công nghệ sử dụng

![ReactJS Logo](https://img.shields.io/badge/React-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=white)
![CSS Logo](https://img.shields.io/badge/css-1572b6?style=for-the-badge&logo=css3&logoColor=ffffff)
![Python Logo](https://img.shields.io/badge/Python-%233776AB.svg?&style=for-the-badge&logo=python&logoColor=white)

## Các bước để chạy project

Clone project về và mở lên với VS Code

### Module website

Bước 1: Mở terminal lên và di chuyển đến module website bằng cách gõ lệnh `cd .\website\`.

Ảnh mẫu:
![Alt text](/resources/image.png)

Bước 2: Gõ lệnh `pnpm i` để cài các dependency cần thiết để chạy project (Hoặc dùng các công cụ khác như `npm i` hoặc `yarn i`).

Bước 3: Gõ lệnh `pnpm start` hoặc `npm start` hoặc `yarn start` để launch project.

Ảnh mẫu (terminal nên trông như thế này sau khi chạy thành công):
![Alt text](/resources/image-1.png)

Ảnh mẫu giao diện:
![Alt text](/resources/image-2.png)

`*Lưu ý: port mặc định của ReactJS là 3000, nếu bạn muốn thay đổi project ở PORT khác thì vẫn trong thư mục website, tạo file mới và đặt tên là .env.anythingyouwant sau đó gõ PORT=<port-you-want>`

Ảnh mẫu:
![Alt text](/resources/image-3.png)

### Module server

Bước 1: Tương tự như module website nhưng lần này chúng ta sẽ đến module server với lệnh `cd .\server\`. Gõ `code .` để thêm một cửa sổ nữa của VS Code.

Bước 2: Tại cửa sổ mới này. Tạo thư mục `.venv` và tiến hành cài đặt các thư viện trong file `requirements.txt` (theo các bước trong [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)).

`*Lưu ý: Bước này sẽ khá mất thời gian do các thư viện được sử dụng khá nặng.`

Ảnh mẫu:
![Alt text](/resources/image-4.png)

Và terminal nên trông như thế này do lần đầu cài đặt (Ở các lần sau chúng ta sẽ cần active lại venv với lệnh `.venv/Scripts/Activate.ps1` mà không cài đặt lại nữa)
![Alt text](/resources/image-5.png)

Bước 3: Gõ lệnh `py main.py` ở cửa sổ VS Code ban đầu hoặc cửa sổ mới để launch server đều được.

Ảnh mẫu cả project:
![Alt text](/resources/image-6.png)

## License

[MIT](https://github.com/mrcaidev/hooks/tree/master/LICENSE)
