import {z} from "zod";

export const validationSchema = z.object({
    name: z.string().nonempty("名前は必須です").min(4, "4文字以上で入力してください"),
    email: z.string().email("正しいメールアドレスを入力してください"),
    password: z.string().nonempty("パスワードは必須です").min(4, "4文字以上で入力してください")
})