/*
 * header menu fs-3
 * category fs-4
 * title fs-5
 * text fs-6
 * more information fs-7
 */

export interface FooterCollectionInterface {
    title: string;
    rows: string[];
}

export const footerCollections = (data:any[] = []): FooterCollectionInterface[] => {
    return [
        {
            'title': 'Kokoria - món ngon chuẩn Hàn',
            'rows': [
                "Địa chỉ: abc xzy",
                "Các thông tin khác",
                "Phương thức liên hệ"
            ],
        },
        {
            'title': 'Thông tin',
            'rows': [
                "Về chúng tôi",
                "Chính sách bảo mật",
                "Điều khoản dịch vụ",
                "Hỗ trợ khách hàng"
            ],
        }
    ]
}

export interface HeaderMenuInterface {
    name: string;
    link: string;
}

export const headerMenu = (data: any[] = []): HeaderMenuInterface[] => {
    return [
        { name: 'Trang chủ', link: '/' },
        { name: 'Sản phẩm', link: '/products' },
        { name: 'Giới thiệu', link: '/about' },
        { name: 'Liên hệ', link: '/contact' }
    ]
}