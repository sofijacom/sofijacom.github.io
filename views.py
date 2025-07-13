from django.shortcuts import render
import time

IP_LIST = []
TIME = 20
MAX_REQ = 25

def count_ip(request, ip):
    _ip = next((el for el in IP_LIST if el['ip'] == ip), False)
    if _ip:
        time_now = time.time()
        if time_now - _ip['time'] > TIME:
            new_list = [el for el in IP_LIST if not el == _ip]
            return new_list
        else:
            _ip['count'] += 1
            if _ip['count'] >= MAX_REQ:
                return render(request, 'index.html', status=429)
            return IP_LIST
    else:
        now = time.time()
        IP_LIST.append({'ip': ip, 'count': 1, 'time': now})
    return IP_LIST

def get_client_ip(req):
    """
    This is used to get the user's IP from the request object.

    """
    x_forwarded_for = req.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = req.META.get('REMOTE_ADDR', "unknown")
    return ip


def index(request):
    ip = get_client_ip(request)
    IP_LIST = count_ip(request, ip)
    return render(request, 'index.html', context={
        'ip': IP_LIST,
    })
