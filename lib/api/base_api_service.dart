import 'dart:async';

import 'package:arogya/res/navigator.dart';
import 'package:arogya/res/storage.dart';




class BaseApiService {
  Future<Map<String, String>> getHeaders(bool mustAuthenticated) async {
    Map<String, String> headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };

    if (mustAuthenticated) {
      try {
        // Retrieve the authentication token from secure storage
        SecureStorageHelper secureStorage = SecureStorageHelper();
        String? token = await secureStorage.read('token');
        headers['Authorization'] = 'Bearer $token';
      } catch (e) {
        return headers;
      }
    }
    return headers;
  }

  void handleUnAuthenticated(statusCode, bool mustAuthenticated) {
    if (statusCode == 401) {
      if (mustAuthenticated) {
        // NavigatorHelper.replaceAll(const LoginScreen());
      }
    }
  }
}
