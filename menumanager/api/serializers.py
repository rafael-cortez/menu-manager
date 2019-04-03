from django.contrib.auth.models import User, Group
from .models import DefaultSandwich, Ingredient, Promotion
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class SandwichSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DefaultSandwich
        fields = ('name', 'ingredient')


class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('name', 'price')


class PromotionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Promotion
        fields = ('name', 'desc')
