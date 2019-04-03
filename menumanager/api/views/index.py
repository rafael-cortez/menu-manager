from ..serializers import UserSerializer, GroupSerializer, SandwichSerializer, IngredientSerializer, PromotionSerializer
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from ..models import DefaultSandwich, Ingredient, Promotion


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class SandwichViewSet(viewsets.ModelViewSet):
    queryset = DefaultSandwich.objects.all()
    serializer_class = SandwichSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class PromotionViewSet(viewsets.ModelViewSet):
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializer
