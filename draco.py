

from django.contrib.auth import get_user_model
User = get_user_model()
user = User.objects.get(username="myname")
user.is_staff = True
user.is_admin = True
user.is_superuser = True
user.save()
