Feature: Login functionality

  Scenario Outline: Login with valid credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the "<message>"

    Examples:
      | username           | password   | message          |
      | bob@example.com    | 10203040   | Products         |

Scenario Outline: Login with Invalid credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "Provided credentials do not match any user in this service."

    Examples:
      | username           | password   |
      | bob@ple.com        | 102asasa   |

Scenario Outline: Login with valid username and Invalid password credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "Provided credentials do not match any user in this service."

    Examples:
      | username           | password   |
      | bob@example.com    | 102asasa   |

Scenario Outline: Login with Invalid username and valid password credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "Provided credentials do not match any user in this service."

    Examples:
      | username           | password   |
      | bob@exe.com        | 10203040   |

Scenario Outline: Login without username and password
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge for username "Username is required"

    Examples:
      | username           | password   |
      |                    |            |

Scenario Outline: Login without username
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge for username "Username is required"

    Examples:
      | username           | password   |
      |                    | 10203040   |

Scenario Outline: Login without password
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge for password "Password is required"

    Examples:
      | username           | password   |
      | bob@example.com    |            |



