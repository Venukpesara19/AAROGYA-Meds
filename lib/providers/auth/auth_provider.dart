import 'package:arogya/api/api_service.dart';
import 'package:arogya/models/auth/user_auth.dart';
import 'package:arogya/repositories/auth/auth_repository.dart';
import 'package:flutter/material.dart';

class AuthProvider extends ChangeNotifier {
  final AuthRepository _authRepository = AuthRepository(ApiService());

  String? _signUpError;
  String? get signUpError => _signUpError;

  String? _loginError;
  String? get loginError => _loginError;

  final bool _isLoginIn = false;
  bool get isLoginIn => _isLoginIn;

  final bool _isSignInIn = false;
  bool get isSignInIn => _isSignInIn;

  Future<bool> registerUser(UserRegisterModel registerModel) async {
    throw UnimplementedError();
  }

  Future<bool> loginUser(UserLoginModel userLoginModel) async {
    throw UnimplementedError();
  }
}
