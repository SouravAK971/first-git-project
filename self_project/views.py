from django.shortcuts import render

def home(request):
    return render(request,'index.html')

def calculator(request):
    return render(request,'tip_calculator.html')

def bank(request):
    return render(request,'beginners_bank.html')

def write(request):
    return render(request,'input_page.html')


def result(request):
    user_input = request.GET.get('the_input', '')
    return render(request,'result.html',{'writePage_input':user_input})
