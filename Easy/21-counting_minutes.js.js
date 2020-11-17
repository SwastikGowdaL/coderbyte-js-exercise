// Challenge
// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be
//two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes
//between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output
//should be 60. If str is 1:00pm-11:00am the output should be 1320.
// Sample Test Cases
// Input:"12:30pm-12:00am"
// Output:690
//
// Input:"1:23am-1:08am"
// Output:1425

// python solution - 
//  minutes = lambda x: (a[1] - a[0]).seconds / 60 if not (a:=list((d:=__import__("datetime")).datetime.strptime(i, "%I:%M%p")
// for i in __import__("re").findall(r'\d{1,2}:\d{2}[ap]m', x)))[0].strftime("%p") == "PM" and a[1].strftime("%p") == "AM" else (a[1] + d.timedelta(1) - a[0]).seconds / 60 
  
// another python solution -
// times = []
// for time in input("Timespan?\n").split("-"):
//     hour, minutes = time.replace('pm', '').replace('am', '').split(':')
//     times.append([12 * 60 + int(hour) * 60 + int(minutes)]) if 'pm' in time else times.append(
//         [int(hour) * 60 + int(minutes)])
// solution = 1440 - (times[0][0] - times[1][0]) if 1440 - (times[0][0] - times[1][0]) < 1440 else (
//             times[0][0] - times[1][0])
// print(solution if solution > 0 else solution * -1)
