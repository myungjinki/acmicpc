namespace Program
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1. 입력받은 문자열을 쪼개 배열에 삽입
            string[] input = Console.ReadLine()!.Split();
            // 2. int로 형변환해서 두 문자열 합하기
            Console.WriteLine(int.Parse(input[0]) + int.Parse(input[1]));
        }
    }
}