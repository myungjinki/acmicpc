#include <iostream>
#include <string>
#include <vector>
#include <sstream>

using namespace std;

// trim from left 
inline std::string& ltrim(std::string& s, const char* t = " \t\n\r\f\v")
{
	s.erase(0, s.find_first_not_of(t));
	return s;
}
// trim from right 
inline std::string& rtrim(std::string& s, const char* t = " \t\n\r\f\v")
{
	s.erase(s.find_last_not_of(t) + 1);
	return s;
}
// trim from left & right 
inline std::string& trim(std::string& s, const char* t = " \t\n\r\f\v")
{
	return ltrim(rtrim(s, t), t);
}

vector<string> split(string input, char delimiter) 
{
	vector<string> answer;
	std::stringstream ss(input);
	string temp;

	while (std::getline(ss, temp, delimiter)) {
		answer.push_back(temp);
	}

	return answer;
}

int main()
{
    int count = 0;
    string s;
    getline(cin, s);
    trim(s);
    vector<string> v = split(s, ' ');
    cout << v.size();

    return 0;
}