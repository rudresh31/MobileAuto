Feature: Login functionality

  Scenario Outline: Login with valid credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the "<message>"

    Examples:
      | username           | password   | message          |
      | bob@example.com    | 10203040   | Welcome          |

Scenario Outline: Login with Invalid credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "<message>"

    Examples:
      | username           | password   |
      | bob@example.com    | 10203040   |

Scenario Outline: Login with valid username and Invalid password credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "<message>"

    Examples:
      | username           | password   |
      | bob@example.com    | 102sggsg   |

Scenario Outline: Login with Invalid username and valid password credentials
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "<message>"

    Examples:
      | username           | password   |
      | bob@exe.com    | 10203040   |

Scenario Outline: Login without username and password
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "<message>"

    Examples:
      | username           | password   |
      |                    |            |

Scenario Outline: Login without username
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "<message>"

    Examples:
      | username           | password   |
      |                    | 10203040   |

Scenario Outline: Login without password
    Given I open the login page
    When I login with "<username>" and "<password>"
    Then I should see the warning meaasge "<message>"

    Examples:
      | username           | password   |
      | bob@example.com    |            |



