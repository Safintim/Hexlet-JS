@login_required
def profile1(request):
    data = {
        'abonent_profile': ProfileAbonent(),
    }
    if request.method =="POST":
        abonent_profile = ProfileAbonent(request.POST, request.FILES, instance=request.user.profile)
        if  abonent_profile.is_valid():
            with connections['api_db'].cursor() as cursor:
                cursor.execute("EXEC FindPobutAbonent @DepartmentId='' , @Abonentname='' , @lsch='' , @EMail='' , @SendFlag=1 , @Abonentid=0 , @proctype=3 , @NewEmail='' ");
                data["abonents"] = dictfetchall(cursor)
    return render(request, 'users/profile1.html', data)

    